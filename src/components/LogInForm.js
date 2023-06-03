import { useFormik } from "formik";
import * as yup from 'yup'
import './LogInForm.css';


function LogInForm() {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            pass: "",
            confirmPass: "",
        },
        validationSchema: yup.object({
            name:yup.string().required("Vui lòng điền vào mục này").min(4,"Nhập ít nhất 4 ký tự"),
            // eslint-disable-next-line no-useless-escape
            email:yup.string().required("Vui lòng điền vào mục này").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"vui lòng nhập đúng định dạng email"),
            phone:yup.string().required("Vui lòng điền vào mục này").matches(/(84 || 0 |0[3|5|7|8|9])+([0-9]{9})\b/,"Vui lòng nhập đúng định dạng số điện thoại"),
            pass:yup.string().required("Vui lòng điền vào mục này").min(8,"Nhập ít nhất 8 ký tự"),
            confirmPass:yup.string().required("Vui lòng điền vào mục này").oneOf([yup.ref('pass'),null], "Không hợp lệ"),
        })
        ,onSubmit: (value) => {
            console.log(value);
            window.alert("Đăng ký thành công!")
        }
    })

    return (
        <section>
            <form className="infoform" onSubmit={formik.handleSubmit}>
                <label>Your Name</label>
                <input 
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name" 
                    onChange={formik.handleChange}
                />
                {formik.touched.name && formik.errors.name && (
                    <p className="errorMsg">{formik.errors.name}</p>
                )}

                <label>Your Email</label>
                <input 
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="Email" 
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                    <p className="errorMsg">{formik.errors.email}</p>
                )}

                <label>Your Phone</label>
                <input
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    type="text" 
                    name="phone" 
                    id="phone" 
                    placeholder="Phone"
                    onChange={formik.handleChange}
                />
                {formik.touched.phone && formik.errors.phone && (
                    <p className="errorMsg">{formik.errors.phone}</p>
                )}
                
                <label>Your Password</label>
                <input
                    onBlur={formik.handleBlur}
                    value={formik.values.pass}
                    type="password"
                    autoComplete="on"
                    name="pass"
                    id="pass" 
                    placeholder="Password" 
                    onChange={formik.handleChange}
                />
                {formik.touched.pass && formik.errors.pass && (
                    <p className="errorMsg">{formik.errors.pass}</p>
                )}
                
                <label>Confirm Your Password</label>
                <input 
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPass}
                    type="password" 
                    autoComplete="on"
                    name="confirmPass" 
                    id="confirmPass" 
                    placeholder="Confirm Your Password" 
                    onChange={formik.handleChange}
                />
                {formik.touched.confirmPass && formik.errors.confirmPass && (
                    <p className="errorMsg">{formik.errors.confirmPass}</p>
                )}

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default LogInForm;