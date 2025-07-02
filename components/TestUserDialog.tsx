import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
const TestUserDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="sidebar-link font-semibold text-yellow-200 cursor-pointer">
          Test User Credentials
        </DialogTrigger>
        <DialogContent className="!bg-stone-900 !h-[300px] text-slate-50 border-slate-50 flex-col !gap-2 !px-10 flex md: flex-row items-center justify-center">
          <Image
            src="/icons/snoopy-credentials.png"
            className="rounded-xl !ml-10"
            alt="Snoopy Credentials Image"
            width={200}
            height={300}
          />
          <DialogHeader>
            <DialogTitle className="font-semibold text-yellow-200 !ml-5">
              Plaid Test User Credentials
            </DialogTitle>
            <DialogDescription className="!ml-5">
              <div className="text16 font-normal text-yellow-200">
                <p>User: user_good</p>
                <p>Password: pass_good</p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TestUserDialog;
