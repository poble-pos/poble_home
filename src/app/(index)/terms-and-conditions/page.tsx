import TsAndCsItem from "@/components/ts-and-cs-item";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen container mx-auto max-w-7xl py-10">
      <div className={"text-4xl font-serif font-medium"}>Terms & Conditions</div>

      <div className={"flex flex-col gap-5 mt-10"}>
        <TsAndCsItem
          title={"1.Information Collection"}
          description={
            "We only ask for personal information when it is necessary to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. You will always be informed about why we are collecting this information and how it will be used."
          }
        />
        <TsAndCsItem
          title={"2.Data Protection"}
          description={
            "We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification."
          }
        />
        <TsAndCsItem
          title={"3.Information Sharing"}
          description={
            "We don't share any personally identifying information publicly or with third-parties, except when required to by law."
          }
        />
        <TsAndCsItem
          title={"4.External Links"}
          description={
            "Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies."
          }
        />
        <TsAndCsItem
          title={"5.Your Rights"}
          description={
            "You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services."
          }
        />
        <TsAndCsItem
          title={"6.Agreement & Contact"}
          description={
            "Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us."
          }
        />
      </div>
      <div className={"mt-10 text-xl"}>This policy is effective as of 21 November 2019</div>
    </div>
  );
}
