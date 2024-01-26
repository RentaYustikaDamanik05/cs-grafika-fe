import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export function Page500() {
  const navigate = useNavigate();
  return (
    <Result
      status='500'
      title='500'
      subTitle='Sorry, something went wrong.'
      extra={<Button type='primary' onClick={() => navigate('/dashboard')}>Back to Home</Button>}
    />
  );
}

export default Page500;
