import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
  });

  // 1. 에러 메시지를 저장할 상태 추가
  const [errors, setErrors] = useState({
    passwordConfirm: '',
    name: ''
  })

  // 2. 버튼 활성화 상태 추가 (Challenge)
  const [isFormValid, setIsFormValid] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const newErrors = { passwordConfirm: '', name: '' };  

    // 비밀번호 실시간 검사
    if (formData.passwordConfirm && formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
    }

    // 이름길이 검사
    if (formData.name && formData.name.length < 2) {
      newErrors.name = '이름은 2글자 이상 입력해주세요.';
    }

    setErrors(newErrors);

    // 모든 필드가 채워져 있고 에러가 없을 때만 버튼 활성화
    const isValid = 
      formData.email && 
      formData.password.length >= 8 &&
      formData.password === formData.passwordConfirm &&
      formData.name.length >= 2;
    
    setIsFormValid(isValid);
  
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const submitData = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
    };

    // TODO: API 호출 (fetch 또는 axios)
    console.log('회원가입 제출 데이터:', submitData);
    alert('회원가입 요청 완료 (API 연결 전)');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이메일</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <label>비밀번호</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required minLength={8} />
        </div>

        <div>
          <label>비밀번호 확인</label>
          <input type="password" name="passwordConfirm" value={formData.passwordConfirm} onChange={handleChange} required />
          {/* 실시간 비밀번호 일치 여부 표시 */}
          {errors.passwordConfirm && <p style={{ color: 'red', fontSize: '12px' }}>{errors.passwordConfirm}</p>}
          {formData.passwordConfirm && !errors.passwordConfirm && formData.password === formData.passwordConfirm && (
            <p style={{ color: 'green', fontSize: '12px' }}>비밀번호가 일치합니다.</p>
          )}
        </div>

        <div>
          <label>이름</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          {errors.name && <p style={{ color: 'red', fontSize: '12px' }}>{errors.name}</p>}
        </div>

        {/* 조건에 따른 버튼 활성화 */}
        <button type="submit" disabled={!isFormValid}>
          가입하기
        </button>
      </form>
      <p><Link to="/">메인으로</Link></p>
    </div>
  );
}

export default Signup;