import { ButtonPhoto, ButtonInfo, InfoButtonContainer } from './styles';
import { selectInfoMenu } from '../../store/info/info';
import { useDispatch } from 'react-redux';

function InfoPainel() {
  const dispatch = useDispatch();

  function handleClickPhoto() {
    dispatch(selectInfoMenu('photo'));
  }

  function handleClickInfo() {
    dispatch(selectInfoMenu('info'));
  }
  return (
    <InfoButtonContainer>
      <ButtonPhoto onClick={handleClickPhoto}>PHOTO</ButtonPhoto>
      <ButtonInfo onClick={handleClickInfo}>INFO</ButtonInfo>
    </InfoButtonContainer>
  );
}

export function Info() {
  return <div>Info</div>;
}

export default InfoPainel;
