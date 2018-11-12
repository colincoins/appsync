import * as React from 'react';
import { Query } from 'react-apollo';
import { listAuctions } from './graphql/queries';
import gql from 'graphql-tag';
import { ListAuctionsQueryVariables, ListAuctionsQuery } from './API';
import { AuctionCard } from './AuctionCard';

export const Auctions = () => {
  return (
    <Query<ListAuctionsQuery, ListAuctionsQueryVariables> query={gql(listAuctions)} variables={{ limit: 100 }}>
      {({ data, loading }) => {
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
            {data.listAuctions.items.map(x => <AuctionCard key={x!.id} name={x!.name} price={x!.price}  />)}
          </div>
        )
      }}      
    </Query>
  );
}