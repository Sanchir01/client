import { useUserStore } from '@/store/userProfile'

export const useGetToken = () => {
    const token = useUserStore(state => state.user.login.accessToken)

    
}