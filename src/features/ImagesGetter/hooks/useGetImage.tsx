import { useLazyQuery } from '@apollo/client';

import GET_IMAGE from '../../../graphql/GET_IMAGES';

type Image = {
  image: {
    data: string;
  };
};

const useGetImage = () => {
  const [handleOnGetImage, { data, loading, error }] =
    useLazyQuery<Image>(GET_IMAGE);

  return {
    handleOnGetImage,
    data,
    loading,
    error,
  };
};

export default useGetImage;
