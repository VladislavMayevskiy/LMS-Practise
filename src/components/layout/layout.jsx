import { Box } from "@chakra-ui/react";

export default function LandingLayout({children}) {
    return (
        <Box height={"100%"} width={"100%"}>
            {children}
        </Box>
    )
}