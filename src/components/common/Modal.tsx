import { usePhoto } from 'contexts/PhotoContext';
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

function Modal() {
  const { updateIsModal, clickPhoto } = usePhoto();

  const closeModal = () => {
    updateIsModal(false);
    console.log('click', clickPhoto);
  };
  return (
    <ModalContainer>
      <ModalText>
        <CloseButton onClick={closeModal}>x</CloseButton>
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
              <dd>6일전 게시물</dd>
            </dl>
            <dl>
              <dt>다운로드</dt>
              <dd>1,345</dd>
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
}

export default Modal;
