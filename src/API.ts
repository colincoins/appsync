/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTaskInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  status?: string | null,
};

export type UpdateTaskInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  status?: string | null,
};

export type DeleteTaskInput = {
  id?: string | null,
};

export type CreatePrivateNoteInput = {
  id?: string | null,
  content: string,
};

export type UpdatePrivateNoteInput = {
  id: string,
  content?: string | null,
};

export type DeletePrivateNoteInput = {
  id?: string | null,
};

export type CreateAuctionInput = {
  id?: string | null,
  name: string,
  price?: number | null,
};

export type UpdateAuctionInput = {
  id: string,
  name?: string | null,
  price?: number | null,
};

export type DeleteAuctionInput = {
  id?: string | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  status?: ModelStringFilterInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPrivateNoteFilterInput = {
  id?: ModelIDFilterInput | null,
  content?: ModelStringFilterInput | null,
  and?: Array< ModelPrivateNoteFilterInput | null > | null,
  or?: Array< ModelPrivateNoteFilterInput | null > | null,
  not?: ModelPrivateNoteFilterInput | null,
};

export type ModelAuctionFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  price?: ModelFloatFilterInput | null,
  and?: Array< ModelAuctionFilterInput | null > | null,
  or?: Array< ModelAuctionFilterInput | null > | null,
  not?: ModelAuctionFilterInput | null,
};

export type ModelFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
};

export type CreateTaskMutation = {
  createTask:  {
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
};

export type UpdateTaskMutation = {
  updateTask:  {
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
};

export type DeleteTaskMutation = {
  deleteTask:  {
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type CreatePrivateNoteMutationVariables = {
  input: CreatePrivateNoteInput,
};

export type CreatePrivateNoteMutation = {
  createPrivateNote:  {
    id: string,
    content: string,
  } | null,
};

export type UpdatePrivateNoteMutationVariables = {
  input: UpdatePrivateNoteInput,
};

export type UpdatePrivateNoteMutation = {
  updatePrivateNote:  {
    id: string,
    content: string,
  } | null,
};

export type DeletePrivateNoteMutationVariables = {
  input: DeletePrivateNoteInput,
};

export type DeletePrivateNoteMutation = {
  deletePrivateNote:  {
    id: string,
    content: string,
  } | null,
};

export type CreateAuctionMutationVariables = {
  input: CreateAuctionInput,
};

export type CreateAuctionMutation = {
  createAuction:  {
    id: string,
    name: string,
    price: number | null,
  } | null,
};

export type UpdateAuctionMutationVariables = {
  input: UpdateAuctionInput,
};

export type UpdateAuctionMutation = {
  updateAuction:  {
    id: string,
    name: string,
    price: number | null,
  } | null,
};

export type DeleteAuctionMutationVariables = {
  input: DeleteAuctionInput,
};

export type DeleteAuctionMutation = {
  deleteAuction:  {
    id: string,
    name: string,
    price: number | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask:  {
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks:  {
    items:  Array< {
      id: string,
      title: string,
      description: string | null,
      status: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPrivateNoteQueryVariables = {
  id: string,
};

export type GetPrivateNoteQuery = {
  getPrivateNote:  {
    id: string,
    content: string,
  } | null,
};

export type ListPrivateNotesQueryVariables = {
  filter?: ModelPrivateNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrivateNotesQuery = {
  listPrivateNotes:  {
    items:  Array< {
      id: string,
      content: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAuctionQueryVariables = {
  id: string,
};

export type GetAuctionQuery = {
  getAuction:  {
    id: string,
    name: string,
    price: number | null,
  } | null,
};

export type ListAuctionsQueryVariables = {
  filter?: ModelAuctionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuctionsQuery = {
  listAuctions:  {
    items:  Array< {
      id: string,
      name: string,
      price: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask:  {
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask:  {
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask:  {
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type OnCreatePrivateNoteSubscription = {
  onCreatePrivateNote:  {
    id: string,
    content: string,
  } | null,
};

export type OnUpdatePrivateNoteSubscription = {
  onUpdatePrivateNote:  {
    id: string,
    content: string,
  } | null,
};

export type OnDeletePrivateNoteSubscription = {
  onDeletePrivateNote:  {
    id: string,
    content: string,
  } | null,
};

export type OnCreateAuctionSubscription = {
  onCreateAuction:  {
    id: string,
    name: string,
    price: number | null,
  } | null,
};

export type OnUpdateAuctionSubscription = {
  onUpdateAuction:  {
    id: string,
    name: string,
    price: number | null,
  } | null,
};

export type OnDeleteAuctionSubscription = {
  onDeleteAuction:  {
    id: string,
    name: string,
    price: number | null,
  } | null,
};
