import gql from 'graphql-tag';

const GET_IMAGE = gql`
  query GetImageQuery(
    $width: Int!
    $height: Int!
    $young: Boolean
    $grayscale: Boolean
  ) {
    image(
      width: $width
      height: $height
      young: $young
      grayscale: $grayscale
    ) {
      data
    }
  }
`;

export default GET_IMAGE;
