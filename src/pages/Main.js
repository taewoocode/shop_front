import { Link } from 'react-router-dom';
import '../styles/Main.css';

function Main() {
  return (
    <div className = "admin-layout">
      <aside className = "sidebar">
        <div className = "sidebar-header">
          <h2 className = "sidebar-title">관리자 페이지</h2>
        </div>

        <nav className = "sidebar-nav">
          <Link to="/" className = "sidebar-link">
          홈
          </Link>
          <Link to="/products" className = "sidebar-link">
          상품관리
          </Link>

          <Link to="/orders" className = "sidebar-link">
          주문관리
          </Link>
          <Link to="/users" className = "sidebar-link">
          회원관리
          </Link>
          <Link to="/settings" className = "sidebar-link">
          설정
          </Link>
        </nav>        
      </aside>

      
      {/* 우측 메인 영역 */}
      <div className="main-content">
        {/* 상단 헤더 */}
        <header className="top-header">
          <div className="header-left">
            <h1>대시보드</h1>
          </div>
          <div className="header-right">
            <div className="search-box">
              <input type="text" placeholder="검색..." />
            </div>
            <div className="header-actions">
              <button className="icon-button">알림</button>
              <div className="profile-menu">
                <button className="profile-button">프로필</button>
              </div>
            </div>
          </div>
        </header>

        {/* 메인 콘텐츠 */}
        <main className="content-area">
          <div className="content-wrapper">
            {/* 여기에 실제 콘텐츠가 들어갑니다 */}
            <p>메인 콘텐츠 영역</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Main;
