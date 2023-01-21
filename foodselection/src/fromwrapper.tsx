
type FromWrapperProps = {
    title: string;
    children: React.ReactNode;
}

export function FormWrapper({ title, children }: FromWrapperProps) {
    return (
        <div>
            <h2 style={{
                textAlign: "center",
                margin: 0,
                marginBottom: "2rem",
            }}
            >{title}</h2>
            <div style={{
                display: "grid",
                gap: "1rem .5rem",
                justifyContent: "flex-start",
                gridTemplateColumns: "auto minmax(auto, 400px)",
            }}  >{children}</div>
        </div>
    )
}