import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Overley } from './styles';

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overley>
      <div className="loader" />
    </Overley>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
