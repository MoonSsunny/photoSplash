import {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from 'react';
import { PhotoContextProps, SearchItem } from 'models/photo';

export const PhotoContext = createContext<PhotoContextProps | undefined>(
  undefined
);

export const PhotoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [photoList, setPhotoList] = useState<SearchItem[]>([]);
  const [bookmarkList, setBookmarkList] = useState<SearchItem[]>([]);
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

  useEffect(() => {
    const localBookmarkList = localStorage.getItem('bookmark');

    if (localBookmarkList) {
      const parsedBookmarkList: SearchItem[] = JSON.parse(localBookmarkList);
      setBookmarkList(parsedBookmarkList);
    }
  }, []);

  const updateIsModal = (value: boolean) => {
    setIsModal(value);
  };

  const updatePhotoItem = (value: SearchItem) => {
    setClickPhoto(value);
  };

  const updatePhotoList = (value: SearchItem[]) => {
    const storedBookmark = localStorage.getItem('bookmark');
    if (storedBookmark) {
      const bookmarkArray: SearchItem[] = JSON.parse(storedBookmark);

      const setBookmark = value.map((item) => {
        const matching = bookmarkArray.find(
          (product) => product.id === item.id
        );
        return matching ? matching : item;
      });
      setPhotoList(setBookmark);
    } else {
      setPhotoList(value);
    }
  };

  const updateBookmarkList = (value: SearchItem) => {
    const toggleBookmark = {
      ...value,
      isBookmark: !value.isBookmark,
    };

    const isItemExists = bookmarkList.some(
      (item) => item.id === toggleBookmark.id
    );

    if (isItemExists) {
      setBookmarkList((prevList) =>
        prevList.filter((item) => item.id !== toggleBookmark.id)
      );
      const updatedPhotoList = photoList.map((photo) => {
        if (photo.id === toggleBookmark.id) {
          return toggleBookmark;
        } else {
          return photo;
        }
      });

      setPhotoList([...updatedPhotoList]);
    } else {
      setBookmarkList([...bookmarkList, toggleBookmark]);
    }
  };

  const checkBookmark = (value: string) => {
    const changeBookmark = photoList.map((item) => {
      if (item.id === value) {
        return {
          ...item,
          isBookmark: !item.isBookmark,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    updatePhotoList([...changeBookmark]);
  };

  const contextValue: PhotoContextProps = {
    isModal,
    clickPhoto,
    photoList,
    updateIsModal,
    updatePhotoItem,
    updatePhotoList,
    checkBookmark,
    bookmarkList,
    updateBookmarkList,
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
