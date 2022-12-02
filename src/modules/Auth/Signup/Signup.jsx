import { useState } from "react";
import { useForm } from "@mantine/form";
import authAPI from "../../../services/authAPI";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Container,
  Modal,
  Center,
} from "@mantine/core";

const Signup = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  //Mantine
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
    },

    validate: {
      taiKhoan: (value) =>
        value.length < 8 ? "Tài khoản phải có ít nhất 8 kí tự" : null,
      matKhau: (value) =>
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
          ? null
          : "Tài khoản phải có ít nhất 8 kí tự gồm cả chữ và số",
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email không hợp lệ"),
      soDt: (value) =>
        value.length < 10 ? "Số điện thoại phải có ít nhất 10 kí tự" : null,
    },
  });

  const handleSubmit = (values) => {
    (async () => {
      try {
        await authAPI.signup(values);
        setError("");
        setOpened(true);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    })();
  };

  return (
    <>
      <Container>
        <Paper radius={15} p={30} shadow="xl">
          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <Title order={2} align="center" mt="md" mb={50}>
              Đăng Ký
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
            <TextInput
              label="Email"
              size="md"
              {...form.getInputProps("email")}
            />
            <TextInput
              label="Số Điện Thoại"
              size="md"
              {...form.getInputProps("soDt")}
            />
            <TextInput
              label="Họ Tên"
              size="md"
              {...form.getInputProps("hoTen")}
            />
            <Button
              mt="xl"
              size="md"
              type="submit"
              className={styles.signup__button}
            >
              Đăng Ký
            </Button>
            {error && <Text color="red">{error}</Text>}
          </form>
        </Paper>
      </Container>

      <Modal
        withCloseButton={false}
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        className="text-center"
      >
       
          <Text size={25} fw={700}>Tạo tài khoản thành công</Text>
          <Button
            size="md"
            className={styles.signup__button}
            onClick={() => navigate("/signin")}
          >
            Đăng nhập ngay!
          </Button>
        
      </Modal>
    </>
  );
};

export default Signup;
