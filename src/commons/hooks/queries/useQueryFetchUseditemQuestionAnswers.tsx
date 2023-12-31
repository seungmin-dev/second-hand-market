import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../types/generated/types";

const FETCH_USEDITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      useditemQuestion {
        _id
        # user {
        #   _id
        # }
      }
      user {
        _id
        email
        name
        picture
      }
      createdAt
      updatedAt
    }
  }
`;

export const useQueryFetchUseditemQuestionAnswers = (
  variables: IQueryFetchUseditemQuestionAnswersArgs,
) => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: variables.useditemQuestionId },
  });
  return query;
};
