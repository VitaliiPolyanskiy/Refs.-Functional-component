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

    if (name !== "" && surname !== "" && age > 0 && rating >= 1 && rating <= 12) {
            Swal.fire({
                title: "Інформація про студента",
                html: `
                    <div style="text-align: left; font-size: 16px;">
                        <b>Ім'я:</b> ${name}<br>
                        <b>Прізвище:</b> ${surname}<br>
                        <b>Вік:</b> ${age}<br>
                        <b>Рейтинг:</b> ${rating}
                    </div>
                `,
                icon: "success",
                confirmButtonText: "ОК",
                confirmButtonColor: "#3a57e8",
            });
        } else {
            Swal.fire({
                title: "Помилка",
                text: "Перевірте правильність заповнення форми.",
                icon: "error",
                confirmButtonText: "Зрозуміло",
            });
        }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
    <h2>Форма студента</h2>

      <div className="field">
        <label>Ім'я:</label>
        <input type="text" defaultValue={props.name} ref={nameRef} />
      </div>

      <div className="field">
        <label>Прізвище:</label>
        <input type="text" defaultValue={props.surname} ref={surnameRef} />
      </div>

      <div className="field">
        <label>Вік:</label>
        <input type="number" defaultValue={props.age} ref={ageRef} />
      </div>

      <div className="field">
        <label>Рейтинг:</label>
        <input type="number" defaultValue={props.rating} ref={ratingRef} />
      </div>

      <button type="submit" className="btn btn-primary">
        Показати дані
      </button>
    </form>
  );
}