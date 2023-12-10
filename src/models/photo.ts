import { HTMLAttributes, ReactNode } from 'react';

export interface SearchItem {
  id: string;
  url: string;
  alt: string;
  tag: object[];
  user: string;
  width: number;
  height: number;
  update: string;
  download?: number;
  isBookmark?: boolean;
  thumbs: string;
}

export interface PhotoListProps {
  photoListItem: SearchItem[];
}

export interface Result {
  total: number;
  total_pages: number;
  results: Object[];
}

export interface PhotoContextProps {
  isModal: boolean;
  clickPhoto: SearchItem;
  photoList: SearchItem[];
  bookmarkList: SearchItem[];
  updateIsModal: (value: boolean) => void;
  updatePhotoItem: (value: SearchItem) => void;
  updatePhotoList: (value: SearchItem[]) => void;
  updateBookmarkList: (value: SearchItem) => void;
  checkBookmark: (value: string) => void;
}

export interface ChildrenProps {
  children: ReactNode;
}

export interface HeaderProps {
  onSearchClick?: () => void;
  onGoBookmark?: () => void;
}

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
  update?: (value: string) => void;
  onSearch: (value: string) => void;
}

export interface PaginationProps {
  total?: number;
  page: number;
  totalPage: number;
  settingPage: (page: number) => void;
}

export interface ThumbnailProps {
  size: number;
  photo: SearchItem;
  src: string;
}
