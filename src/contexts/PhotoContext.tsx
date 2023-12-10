import { createContext, useContext, useState, ReactNode, FC } from 'react';
import { PhotoContextProps, SearchItem } from 'models/photo';

export const PhotoContext = createContext<PhotoContextProps | undefined>(
  undefined
);

export const PhotoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [photoList, setPhotoList] = useState<SearchItem[]>([]);
  const [clickPhoto, setClickPhoto] = useState<SearchItem>({
    id: '',
    url: '',
    alt: '',
    tag: [],
    user: '',
    width: 0,
    height: 0,
    update: '',
    download: 0,
    thumbs: '',
    isBookmark: false,
  });

  const updateIsModal = (value: boolean) => {
    setIsModal(value);
  };

  const updatePhotoItem = (value: SearchItem) => {
    setClickPhoto(value);
  };

  const updatePhotoList = (value: SearchItem[]) => {
    setPhotoList(value);
  };

  const contextValue: PhotoContextProps = {
    isModal,
    clickPhoto,
    photoList,
    updateIsModal,
    updatePhotoItem,
    updatePhotoList,
  };
  return (
    <PhotoContext.Provider value={contextValue}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhoto = (): PhotoContextProps => {
  const contextValue = useContext(PhotoContext);

  if (!contextValue) {
    throw new Error('error');
  }

  return contextValue;
};
