// tslint:disable
// this is an auto generated file. This will be overwritten

export const getTask = `query GetTask($id: ID!) {
  getTask(id: $id) {
    id
    title
    description
    status
  }
}
`;
export const listTasks = `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      status
    }
    nextToken
  }
}
`;
export const getPrivateNote = `query GetPrivateNote($id: ID!) {
  getPrivateNote(id: $id) {
    id
    content
  }
}
`;
export const listPrivateNotes = `query ListPrivateNotes(
  $filter: ModelPrivateNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
    }
    nextToken
  }
}
`;
export const getAuction = `query GetAuction($id: ID!) {
  getAuction(id: $id) {
    id
    name
    price
  }
}
`;
export const listAuctions = `query ListAuctions(
  $filter: ModelAuctionFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuctions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      price
    }
    nextToken
  }
}
`;
