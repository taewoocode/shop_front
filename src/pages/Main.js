import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h1>쇼핑몰 관리자</h1>
      <p>
        <Link to="/signup">회원가입</Link>
      </p>
    </div>
  );
}

export default Main;
