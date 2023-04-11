import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from '../models/user';
import { loginSchema } from "../validate/login";
import { registerSchema } from '../validate/register';

export const getUser = async (req, res) => {
    try {
        // const { data } = await axios.get(`http://localhost:3000/products`)
        const data = await User.find();

        if (data.length === 0) {
            return res.status(200).json({
                message: "Không có dữ liệu"
            })
        }
        return res.json(data)
    }
    catch (err) {
        return res.status(404).json({
            message: err
        });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { error } = loginSchema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message),
            });
        }
        // Kiểm tra xem user đã đk chưa?
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Email không tồn tại",
            });
        }

        // So sánh mật khẩu
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Mật khẩu không đúng",
            });
        }

        const token = jwt.sign({ id: user._id }, "l0u9o0n7g", { expiresIn: "1h" });

        user.password = undefined;

        return res.status(200).json({
            message: "Đăng nhập thành công",
            accessToken: token,
            user,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}

export const register = async (req, res) => {
    try {
        const { error } = registerSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const userExist = await User.findOne({ email: req.body.email });
        if (userExist) {
            return res.status(400).json({
                message: "Email đã tồn tại",
            });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        return res.status(200).json({
            message: 'Tạo tài khoản thành công',
            user
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}