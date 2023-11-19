import './Label.css';
export const Label = ({text, primary, backgroundColor}) => {
  return <>
    <label style={{backgroundColor : backgroundColor }} className={primary? 'primary-label': 'secundary-label'}>{text}</label>
  </>
};

