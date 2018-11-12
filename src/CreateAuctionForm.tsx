import * as React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Mutation } from 'react-apollo';
import { createAuction } from './graphql/mutations';
import gql from 'graphql-tag';
import { CreateAuctionMutation, CreateAuctionMutationVariables, ListAuctionsQuery } from './API';
import { listAuctions } from './graphql/queries';
import { produce } from 'immer';
interface FormValues {
  name: string
  price: number  
}
export const CreateAuctionForm = () => {
  return (
    <Mutation<CreateAuctionMutation, CreateAuctionMutationVariables> mutation={gql(createAuction)}>
      {(createAuction) => (
        <Formik<FormValues> 
          initialValues={{ name: '', price: 0}}
          onSubmit={async ({ name, price }, { resetForm }) => {
            // call mutation
            const response = await createAuction({
              variables: {
                input: {
                  name,
                  price
                }
              },

              // Optimistic Response fires right away & then shows a change in the UI & then waits for the mutation to come back & then updates the UI again.
              optimisticResponse: {
                createAuction: {
                  id: '-1',
                  name,
                  price,
                }
              },
              // Idea is to use Mutation response to update the cache.
              // Because what we get returned is a new auction & we can append to that end of our cache.
              // Update waits for the mutation to be complete & then shows the change in the UI.
              update: (store, { data }) => {
                if (!data || !data.createAuction) {
                  return;
                }

                // Get current items in the cache.
                const auctions = store.readQuery<ListAuctionsQuery>({ query: gql(listAuctions), variables: { limit: 100 }})
                store.writeQuery({
                  query: gql(listAuctions),
                  variables: { limit: 100 },
                  data: produce(auctions, draftState => {
                    draftState!.listAuctions!.items!.unshift(
                      data.createAuction
                    )
                  })
                })
              }
            })
            resetForm();
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                margin="normal"
              />
              <br />
              <TextField
                name="price"
                label="Price"
                value={values.price}
                onChange={handleChange}
                margin="normal"
              />
              <br />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>
          )}
        </Formik>
      )}
    </Mutation>
  )
}