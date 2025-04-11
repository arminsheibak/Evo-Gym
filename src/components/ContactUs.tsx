import { motion } from "framer-motion";
import Heading from "./Heading";
import ContactUsPageGraphic from "../assets/ContactUsPageGraphic.png";
import Evolve from "../assets/EvolveText.png";
import { useForm } from "react-hook-form";

interface Props {
  setSelectedPage: (value: string) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const OnSubmit = async (e: React.FormEvent) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage("contactus")}>
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Heading>JOIN NOW TO GET IN SHAPE</Heading>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_black"
              onSubmit={OnSubmit}
              action={"https://formsubmit.co/f84e778c35993a82e94d6f036cf8eddc "}
              method="POST"
            >
              <div className="mb-5 ">
                <input
                  className={inputStyles}
                  type="text"
                  placeholder="NAME"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="text-primary-500">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 char."}
                  </p>
                )}
              </div>

              <div className="mb-5">
                <input
                  className={inputStyles}
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="text-primary-500">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <textarea
                  className={inputStyles}
                  placeholder="MESSAGE"
                  rows={4}
                  cols={50}
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="text-primary-500">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="hidden md:flex w-full absolute -bottom-23 right-20 z-[-1]">
              <img src={Evolve} />
            </div>
            <img
              className="w-full md:-mt-40 "
              alt="contact-us-page-graphic"
              src={ContactUsPageGraphic}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
