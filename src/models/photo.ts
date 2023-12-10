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
}

export interface Result {
  total: number;
  total_pages: number;
  results: Object[];
}

export interface PhotoContextProps {
  isModal: boolean;
  clickPhoto: SearchItem;
  updateIsModal: (value: boolean) => void;
  updatePhotoItem: (value: SearchItem) => void;
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
  total: number;
  page: number;
  totalPage: number;
  settingPage: (page: number) => void;
}

export interface ThumbnailProps {
  size: number;
  photo?: SearchItem;
  src: string;
}
