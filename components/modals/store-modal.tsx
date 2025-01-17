"use client";

import * as z from "zod";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem } from "@/components/ui/form";

const formSchema = z.object({
    name: z.string().min(1),
})

export const StoreModal = () =>{
    const storeModal = useStoreModal();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        console.log(values);
        // TODO: Create Store
    }

return (
    <Modal 
        title="Create store" 
        description="Add a new store to manage product"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}>
        <div>
            <div className="space-y-4 py-2 pb-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField 
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    
                                </FormItem>        
                            )}
                        />
                    </form>
                </Form>
            </div>
        </div>
    </Modal>
);
}