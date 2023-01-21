
type FromWrapperProps = {
    title: string;
    children: React.ReactNode;
}

export function FormWrapper({ title, children }: FromWrapperProps) {
    return (
        <div className="">

            <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">{title}</h2>

            <br />
            <div>
                {children}
            </div>
        </div>
    )
}