import { useState } from 'react';

import './styles.css';
import Checkbox from './components/Checkbox';
import Slider from './components/Slider';
import useGetImage from './hooks/useGetImage';
import Loader from './components/Loader';

type Params = {
  width: number;
  height: number;
  young: boolean;
  grayscale: boolean;
};

const initialParams = {
  width: 200,
  height: 200,
  young: false,
  grayscale: false,
};

const ImagesGetter = () => {
  const [params, setParams] = useState<Params>(initialParams);

  const { handleOnGetImage, data, loading, error } = useGetImage();

  const handleOnGetImageClicked = () => {
    handleOnGetImage({ variables: params });
  };

  const handleOnCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event?.target;
    if (!input) return;
    setParams({
      ...params,
      [input.id]: input.checked,
    });
  };

  const handleOnSliceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event?.target;
    if (!input) return;
    setParams({
      ...params,
      [input.id]: parseInt(input.value),
    });
  };

  const img = data?.image?.data || undefined;

  const renderElement = () => {
    if (loading) {
      return (
        <div className="loader-container">
          <Loader />
        </div>
      );
    }
    if (error) {
      return (
        <div className="error-container">
          Oops! Something happen, please try again.
        </div>
      );
    }
    return (
      <>
        {img && (
          <div className="image-container">
            <div dangerouslySetInnerHTML={{ __html: img }} />
          </div>
        )}
      </>
    );
  };

  return (
    <div className="image-getter-wrapper">
      <div className="instructions">
        Please select the options and get the image!
      </div>
      <div className="params">
        <div className="checks">
          <Checkbox
            id="young"
            label="Young"
            checked={params?.young}
            onChange={handleOnCheckChange}
          />
          <Checkbox
            id="grayscale"
            label="Grayscale"
            checked={params?.grayscale}
            onChange={handleOnCheckChange}
          />
        </div>
        <Slider
          id="width"
          label="Width"
          value={params?.width}
          onChange={handleOnSliceChange}
        />
        <Slider
          id="height"
          label="Height"
          value={params?.height}
          onChange={handleOnSliceChange}
        />
        <button onClick={handleOnGetImageClicked}>Get image</button>
      </div>
      {renderElement()}
    </div>
  );
};

export default ImagesGetter;
