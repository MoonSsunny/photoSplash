import { usePhoto } from 'contexts/PhotoContext';
import { MouseEventHandler, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import colors from 'utils/colors';

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalText = styled.div`
  width: 1000px;
  z-index: 9999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  border-radius: 4px;
  padding: 20px;
  .bookmark {
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;
  }
  .name {
    font-size: 25px;
    font-weight: 600;
    margin: 0 0 0 50px;
  }
  .detailImage {
    max-width: 400px;
    display: block;
    text-align: center;
    margin: 0 auto;
  }
  .detailText {
    margin-top: 30px;
  }
`;

const CloseButton = styled.button`
  font-size: 30px;
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
`;

const Detail = styled.div`
  display: flex;
  margin: 30px 50px;
  dl {
    & + dl {
      margin-left: 50px;
    }
  }
  dt {
    margin-bottom: 10px;
    font-size: 13px;
    font-weight: 700;
    color: ${colors.gray05};
  }
  dd {
    font-size: 13px;
    font-weight: 700;
  }
`;

const Chips = styled.ul`
  margin-left: 40px;
  li {
    padding: 8px;
    border-radius: 4px;
    display: inline-block;
    background-color: ${colors.gray04};
    margin-left: 10px;
  }
`;

const Modal = () => {
  const {
    updateIsModal,
    clickPhoto,
    checkBookmark,
    updateBookmarkList,
    updatePhotoItem,
    bookmarkList,
  } = usePhoto();

  const closeModal = () => {
    updateIsModal(false);
  };

  const calcDays = useCallback(() => {
    const currentDate: Date = new Date();
    const getDays: Date = new Date(clickPhoto.update);

    const timeDifference: number = currentDate.getTime() - getDays.getTime();

    const daysDifference: number = Math.ceil(
      timeDifference / (1000 * 60 * 60 * 24)
    );

    return daysDifference;
  }, [clickPhoto]);

  const handleBookmark: MouseEventHandler<HTMLImageElement> = (event) => {
    event.stopPropagation();
    updatePhotoItem({ ...clickPhoto, isBookmark: !clickPhoto.isBookmark });
    checkBookmark(clickPhoto.id);
    updateBookmarkList(clickPhoto);
  };

  useEffect(() => {
    localStorage.setItem('bookmark', JSON.stringify(bookmarkList));
  }, [bookmarkList]);

  return (
    <ModalContainer onClick={closeModal}>
      <ModalText onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>x</CloseButton>
        <img
          src={clickPhoto.isBookmark ? 'heart_fill.svg' : 'like_line.svg'}
          alt="bookmark"
          className="bookmark"
          onClick={handleBookmark}
        />
        <p className="name">{clickPhoto.user}</p>
        <img
          src={clickPhoto.url}
          alt={clickPhoto.alt}
          className="detailImage"
        />
        <div className="detailText">
          <Detail>
            <dl>
              <dt>이미지크기</dt>
              <dd>
                {clickPhoto.width} X {clickPhoto.height}
              </dd>
            </dl>
            <dl>
              <dt>업로드</dt>
              <dd>{calcDays()}일전 게시물</dd>
            </dl>
            <dl>
              <dt>다운로드</dt>
              <dd>{clickPhoto.download?.toLocaleString()}</dd>
            </dl>
          </Detail>
          <Chips>
            {clickPhoto.tag &&
              (clickPhoto.tag as { title: string }[]).map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
          </Chips>
        </div>
      </ModalText>
    </ModalContainer>
  );
};

export default Modal;
