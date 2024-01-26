import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export function Page403() {
  const navigate = useNavigate();
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, you are not authorized to access this page.'
      extra={<Button type='primary' onClick={() => navigate('/dashboard')}>Back to Home</Button>}
    />
  );
}

export default Page403;
