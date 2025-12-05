import React, { useRef } from "react";
import Swal from "sweetalert2";
import "../styles/StudentForm.css";

type StudentsProps = {
  name?: string;
  surname?: string;
  age?: number;
  rating?:number;
};

export default function StudentFormFunc(props: StudentsProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const surname = surnameRef.current?.value;
    const age = Number(ageRef.current?.value);
    const rating = Number(ratingRef.current?.value);

           if (name !== "" && surname !== "" && age > 0 && rating >=1 && rating <= 12) {
            Swal.fire({
                title: "Информация о студенте",
                html: `
                    <div style="text-align: left; font-size: 16px;">
                        <b>Имя:</b> ${name}<br>
                        <b>Фамилия:</b> ${surname}<br>
                        <b>Возраст:</b> ${age}<br>
                        <b>Рейтинг:</b> ${rating}
                    </div>
                `,
                icon: "success",
                confirmButtonText: "ОК",
                confirmButtonColor: "#3a57e8",
            });
        } else {
            Swal.fire({
                title: "Ошибка",
                text: "Проверьте правильность заполнения формы.",
                icon: "error",
                confirmButtonText: "Понятно",
            });
        }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
    <h2>Форма студента</h2>

      <div className="field">
        <label>Имя:</label>
        <input type="text" defaultValue={props.name} ref={nameRef} />
      </div>

      <div className="field">
        <label>Фамилия:</label>
        <input type="text" defaultValue={props.surname} ref={surnameRef} />
      </div>

      <div className="field">
        <label>Возраст:</label>
        <input type="number" defaultValue={props.age} ref={ageRef} />
      </div>

      <div className="field">
        <label>Рейтинг:</label>
        <input type="number" defaultValue={props.rating} ref={ratingRef} />
      </div>

      <button type="submit" className="btn btn-primary">
        Показать данные
      </button>
    </form>
  );
}
