import { actionTypes } from 'constants/actionTypes';

interface GetAllGuitars {
  type: actionTypes.GET_ALL_GUITARS;
}

interface CreateGuitar {
  type: actionTypes.CREATE_GUITAR;
}

interface DeleteGuitar {
  type: actionTypes.DELETE_GUITAR;
}

interface UpdateGuitar {
  type: actionTypes.UPDATE_GUITAR;
}

export type Action = GetAllGuitars | CreateGuitar | DeleteGuitar | UpdateGuitar;
