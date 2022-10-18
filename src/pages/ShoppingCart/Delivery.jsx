import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { userApi } from "../../api/userApi";
import { useState } from "react";
import { Input } from "../../components/Input/Input";
export const Delivery = ({ setStep }) => {
  const user = useSelector(selectUser);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const fetchInfor = async () => {
      try {
        const response = await userApi.getUserInfor(user.userInfor.id);
        setUserInfo(response);
      } catch (error) {
        if (error.response) console.log(error.response.data);
      }
    };
    fetchInfor();
  }, [user]);

  const dateOfBirth = new Date(userInfo.dateOfBirth);

  return (
    <div className="mt-10 w-9/12 m-auto">
      <div className="text-center text-4xl font-semibold">
        Thông tin vận chuyển
      </div>
      <div className="mt-10 grid-rows-4 gap-5 grid mb-16">
        <Input label="Họ và tên" value={user.userInfor.fullname} />
        <Input
          type="number"
          label="Số điện thoại"
          value={userInfo.phoneNumber}
          pattern="[0-9]{10}"
        />
        <Input type="date" value={dateOfBirth.toLocaleDateString("sv")} />
        <Input type="text" label="Địa chỉ" value={userInfo.address} />
      </div>
      <div className="flex justify-between pb-16">
        <button
          className="border-slate-300 border-2 rounded-3xl w-60 h-12 text-regal-blue "
          onClick={() => setStep("cart")}
        >
          Quay lại giỏ hàng
        </button>
        <button
          className="bg-regal-blue rounded-3xl w-60 h-12 text-white shadow-md"
          onClick={() => setStep("payment")}
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
};
