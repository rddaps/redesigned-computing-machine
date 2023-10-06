import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, $password: password) {
      username
      email
      password
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($title: String!, $author: String!, $description: String!) {
    saveBook(title: $title, author: $author, $description: description) {
title
author
description
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation createUser($_id: String!) {
    createUser(_id: $_id) {
_id
    }
  }
`;
