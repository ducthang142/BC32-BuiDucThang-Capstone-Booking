import React from "react";
import { useForm } from "@mantine/form";
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Container,
} from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useSearchParams, useNavigate } from "react-router-dom";
import { signin } from "../../../slices/authSlice";
import styles from "./Signin.module.css";

/**
object đăng nhập:
{
  "taiKhoan": "string",
  "matKhau": "string"
}
*/

const Signin = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  //Mantine
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },

    validate: {
      taiKhoan: (value) =>
        value.length < 8 ? "Tài khoản phải có ít nhất 8 kí tự" : null,
      matKhau: (value) =>
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
          ? null
          : "Tài khoản phải có ít nhất 8 kí tự gồm cả chữ và số",
    },
  });

  const handleSubmit = (values) => {
    dispatch(signin(values));
  };

  if (user) {
    const redirectUrl = searchParams.get("redirectUrl");
    // Có thông tin user => đã đăng nhập => redirect về redirectUrl hoặc Home
    return <Navigate to={redirectUrl || "/"} replace />;
  }

  return (
    <>
      <Container>
        <Paper radius={15} p={30} shadow="xl">
          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <Title order={2} align="center" mt="md" mb={50}>
              Đăng Nhập
            </Title>

            <TextInput
              label="Tài Khoản"
              size="md"
              {...form.getInputProps("taiKhoan")}
            />
            <PasswordInput
              label="Mật Khẩu"
              mt="md"
              size="md"
              {...form.getInputProps("matKhau")}
            />
            <Button
              mt="xl"
              size="md"
              type="submit"
              className={styles.signin__button}
              disabled={loading}
            >
              Đăng Nhập
            </Button>
            {error && <Text color="red">{error}</Text>}
          </form>
          <Text align="center" mt="md">
            Chưa có tài khoản?{" "}
            <span
              onClick={() => navigate("/signup")}
              className={styles.signin__dangKy}
            >
              Đăng ký ngay!
            </span>
          </Text>
        </Paper>
      </Container>
    </>
  );
};

export default Signin;
