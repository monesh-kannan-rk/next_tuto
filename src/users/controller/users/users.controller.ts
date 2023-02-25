import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUser(){
        return [{name: "Rio", email: "rio@gmail.com"}]
    }

    @Get('posts')
    getUserPost(){
        return[{
            name: "Rio", 
            email: "rio@gmail.com",
            posts: [
                {
                    id: 1,
                    tweet: "Hola 123"
                },
                {
                    id: 2,
                    tweet: "mass uh"
                }
            ]
        }]
    }

    @Get('posts/comments')
    getUserPostComments(){
        return [
            {
                id: 1,
                tweet: "Hola 123",
                comments: [
                ]
            }
        ]
    }
}
