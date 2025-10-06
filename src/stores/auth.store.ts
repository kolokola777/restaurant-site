import { create } from "zustand";

const useAuth = create<AuthTypes>((set) => {
    return {
        user: {
            email: "",
            password: ""
        },
        handleLogin(values) {
            return set(() => ({
                user: values
            }))
        },

        handleLogout() {
            return set(() => ({
                user: {
                    email: "",
                    password: "",
                }
            }))
        },
    }
});

interface AuthTypes {
    user: User;
    handleLogin: (values: User) => void;
    handleLogout: () => void;
};

interface User {
    email: string;
    password: string;
};

export { useAuth, type User, type AuthTypes }