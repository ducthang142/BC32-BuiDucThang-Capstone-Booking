import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import userAPI from "../../services/userAPI";
import { useSelector } from "react-redux";
import formatDateTime from "../../utils/formatDateTime";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  


  useEffect(() => {
    (async () => {
      try {
        const data = await userAPI.getUserDetails();
        setUserInfo(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      taiKhoan: userInfo.taiKhoan,
      matKhau: userInfo.matKhau,
      email: userInfo.email,
      soDt: userInfo.soDT,
      hoTen: userInfo.hoTen,
    },
    mode: "onTouched",
  });
  const { errors } = formState;

  useEffect (() => {
    reset ({
      taiKhoan: userInfo.taiKhoan,
      matKhau: userInfo.matKhau,
      email: userInfo.email,
      soDt: userInfo.soDT,
      hoTen: userInfo.hoTen,
    })
  },[userInfo])

  const onInput = (evt) => {
    const { name, value } = evt.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onInputSoDt = (evt) => {
    const { value } = evt.target;
    setUserInfo({ ...userInfo, soDT: value });
  };

  const onSubmit = (values) => {
    console.log(values);
    (async () => {
      try {
        const newUserInfo = {
          ...values,
          maLoaiNguoiDung: userInfo.maLoaiNguoiDung,
        };
        await userAPI.updateUserInfo(newUserInfo);
        alert("123");
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h4>Cài đặt tài khoản chung</h4>
            <p>Thông tin có thể được thay đổi</p>
            <label>Tài Khoản</label>
            <input
              value={userInfo.taiKhoan} 
              onInput={onInput}
              {...register("taiKhoan", {
                required: {
                  value: true,
                  message: "Tài khoản không được để trống",
                },
              })}
            />
            {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}
          </div>

          <div>
            <label>Mật khẩu</label>
            <input
              value={userInfo.matKhau}
              onInput={onInput}
              {...register("matKhau", {
                required: {
                  value: true,
                  message: "Mật khẩu không được để trống",
                },
              })}
            />
            {errors.matKhau && <span>{errors.matKhau.message}</span>}
          </div>

          <div>
            <label>Email</label>
            <input
              value={userInfo.email}
              onInput={onInput}
              {...register("email", {
                required: { value: true, message: "Email ko dc để trống" },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div>
            <label>Số Điện Thoại</label>
            <input
              value={userInfo.soDT}
              onInput={onInputSoDt}
              {...register("soDt", {
                required: {
                  value: true,
                  message: "Số điện thoại ko dc để trống",
                },
              })}
            />
            {errors.soDt && <span>{errors.soDt.message}</span>}
          </div>

          <div>
            <label>Họ Tên</label>
            <input
              value={userInfo.hoTen}
              onInput={onInput}
              {...register("hoTen", {
                required: { value: true, message: "Họ tên ko dc để trống" },
              })}
            />
            {errors.hoTen && <span>{errors.hoTen.message}</span>}
          </div>

          <button>Cập Nhật</button>
        </form>
      </div>

      <div>
        <h4>Lịch sử đặt vé</h4>
        {userInfo.thongTinDatVe?.map((item, index) => (
          <div key={index}>
            <p>Ngày đặt: {formatDateTime(item.ngayDat)}</p>
            <h4>Tên phim: {item.tenPhim}</h4>
            <p>
              Thời lượng: {item.thoiLuongPhim} | Giá vé: {item.giaVe} VND
            </p>
            <h4>{item.danhSachGhe[0].tenHeThongRap}</h4>
            <p>
              {item.danhSachGhe[0].tenRap} | Ghế số:
              {item.danhSachGhe.map((item, index) => (
                <span key={index}> {item.tenGhe},</span>
              ))}
            </p>
            <span>
              Tổng tiền đã thanh toán: {item.giaVe * item.danhSachGhe.length}{" "}
              VND
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;
