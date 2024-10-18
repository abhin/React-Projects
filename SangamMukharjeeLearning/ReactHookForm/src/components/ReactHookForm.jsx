import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("Form Data", data);

  console.log("firstName", watch("firstName"));
  console.log("lastName", watch("lastName"));
  console.log(errors);

  return (
    <form className="vw-100 mt-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="m-2">
          <input
            {...register("firstName", { required: true, minLength: 4 })}
            className="form-control"
          />
          {errors.firstName && (
            <span style={{ color: "red" }}>First name is required</span>
          )}
        </div>
        <div className="m-2">
          <input
            {...register("lastName", { required: true, minLength: 4 })}
            className="form-control"
          />

          {errors.lastName && (
            <span style={{ color: "red" }}>
              {(errors.lastName.type == "required" &&
                "Last name is required") ||
                (errors.lastName && errors.lastName.type == "minLength" && "Minimum length of Last name is 4")}
            </span>
          )}
        </div>

        <div className="m-2">
          <input type="submit" className="btn btn-primary mb-3" />
        </div>
      </div>
    </form>
  );
}
