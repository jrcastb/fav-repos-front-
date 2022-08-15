import { gql } from "@apollo/client";


const GET_REPOS = gql`
query {
    user(login: "jrcastb") {
      id
    name
    repositories(first:5) {
      edges {
        node {
            id
            nameWithOwner
        }
      }
    }
    }
}
`;

export default GET_REPOS