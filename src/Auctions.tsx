import * as React from 'react';
import { Query } from 'react-apollo';
import { listAuctions } from './graphql/queries';
import gql from 'graphql-tag';
import { ListAuctionsQueryVariables, ListAuctionsQuery } from './API';
import { AuctionCard } from './AuctionCard';
import { OnMount } from './components/OnMount';
import { buildSubscription } from 'aws-appsync';
import { onCreateAuction } from './graphql/subscriptions';

export const Auctions = () => {
  return (
    <Query<ListAuctionsQuery, ListAuctionsQueryVariables> query={gql(listAuctions)} variables={{ limit: 100 }}>
      {({ data, loading, subscribeToMore }) => {
        // Subscriptions: In your Query component, there is a subscribeToMore available. We want to call it at the beginning & at the end. For subscribeToMore, we want inside a lifecycle method that mounts & unmounts. We will use a hook for this.
        if (loading || !data || !data.listAuctions || !data.listAuctions.items) {
          return null;
        }

        console.log(data.listAuctions.items)
        
        return (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridGap: 10,
          }}>

          
          <OnMount onEffect={() => {
             return subscribeToMore(
               buildSubscription(gql(onCreateAuction), gql(listAuctions))
            );
          }}/>
            {data.listAuctions.items.map(x => <AuctionCard key={x!.id} name={x!.name} price={x!.price}  />)}
          </div>
        )
      }}      
    </Query>
  );
}