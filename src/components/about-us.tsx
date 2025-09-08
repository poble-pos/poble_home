import Image from "next/image";

export default function AboutUs() {
  return (
    <div className={"flex flex-col  gap-5"}>
      <div>About Us</div>
      <div>Explore Your Next Potential with Us</div>
      <div className={"flex items-center justify-between"}>
        <div className={"flex flex-col"}>
          <div>
            POBLE comprises of cloud based multi-modular solutions that specifically target the
            retail, restaurant, and stock based business.
          </div>
          <div>
            The company is to establish to support business owners struggling all hassles of
            business operation. We are building a tool for business and move every business features
            to cloud to help business owners struggling.
          </div>
          <div>
            POBLE would like to grow up together with you. We want to explore the possibilities that
            our cloud system will offer you for the next stages of your business.
          </div>
        </div>
        <div>
          <Image src={"/about-img.svg"} alt={"intro"} width={300} height={300} />
        </div>
      </div>

      <div className={"flex items-center justify-between"}>
        <div>
          <Image src={"/about-extra-1.svg"} alt={"intro"} width={300} height={300} />
        </div>
        <div>
          <div>YES, Cloud based system of POBLE Can</div>
          <p>
            Traditional Point of Sales System (POS system) has its own limitation. It runs on closed
            networks and the data is only stored on local servers. This method does not allow users
            to access data from anywhere, anytime they want.
          </p>
          <p>
            However, with our experienced staff, POBLE can provide cloud based POS system. POBLE
            system will make data be able to be stored online securely. In this way owners can share
            data with authorised users and access from anywhere with portable devices connecting
            internet.
          </p>
          <p>
            It also equips strong back office management function which is developed for franchise
            business with multiple outlets.
          </p>
        </div>
      </div>

      <div className={"flex items-center justify-between"}>
        <div>
          <div>Securing customer by User-Friendly POS System</div>

          <p>
            People are usually struggling with how to use POS system and afraid of cost to set up
            the system. POBLE’s POS system is easy to use and this will attract business owners to
            use our system.
          </p>

          <p>
            Simple tutorial mode is able users to be confident about POS system and left feedback to
            us for improvement. Two directional communication between users and us will increase
            chance to develop.
          </p>

          <p>
            Traditional POS systems usually have high upfront cost including hardware installation
            and continuous outgoing fee for manual maintenance and updates.
          </p>

          <p>
            BUT, Our cloud POS system has little upfront and outgoing service fee to use our system.
            All maintenance and updates will be done without hiring technician which will cost less.
            Also, it uses portable devices like tablets and mobile phones. Users can add or deduct
            accessories as they need on their budget.
          </p>
        </div>

        <div>
          <Image src={"/about-extra-2.svg"} alt={"intro"} width={300} height={300} />
        </div>
      </div>
    </div>
  );
}
