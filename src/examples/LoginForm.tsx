import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Box } from "@/components/Layout/Box";
import { Stack } from "@/components/Layout/Stack";
import { Text } from "@/components/Text";

const LoginForm = () => {
  return (
    <Box className="px-8 py-12 border border-gray-300 rounded-xl">
      <Stack>
        <Text
          as="h2"
          weight={"bold"}
          align={"center"}
          size={"h1"}
          className="mb-2"
        >
          Login
        </Text>
        <Text
          as="span"
          emphasis={"low"}
          align={"center"}
          size={"sm"}
          className="mb-8"
        >
          Please enter your credentials to login
        </Text>
        <Text
          as="label"
          htmlFor="username"
          className="mb-1.5"
          size={"sm"}
          weight={"semibold"}
        >
          Username
        </Text>
        <Input
          id="username"
          type="text"
          placeholder="Enter your username"
          className="mb-4"
        />
        <Text
          as="label"
          htmlFor="password"
          className="mb-1.5"
          size={"sm"}
          weight={"semibold"}
        >
          Password
        </Text>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="mb-10"
        />
        <Button type="submit" variant="solid" className="mb-10">
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginForm;
