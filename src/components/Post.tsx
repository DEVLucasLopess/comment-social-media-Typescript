import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from './Post.module.css'
import { Comment } from './Comment'
import Avatar from './Avatar'

interface Author {
    name: string,
    role: string,
    avatarUrl: string
}

interface Content {
    type: 'paragraph' | 'link',
    content: string
}

export interface PostType {
    author: Author, 
    publishedAt: Date,
    content: Content[],
    id: number
}

interface PostProps {
    post: PostType
} 

export const Post = ({ post }: PostProps) => {
    //formatar os dados de data/hora/ano
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    }).format(post.publishedAt)
    

    const [comments, setComments] = useState([
        'Post muito legal, parabéns!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value)
        event.target.setCustomValidity('');
    }

    function deleteComment(itemDelete: string) {
        const listaDeComentariosSemOqueDeletei = comments.filter(item => {
            return item !== itemDelete;
        })

        setComments(listaDeComentariosSemOqueDeletei)
    }

    function handleNewComentInvalid (event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Este campo é obrigatorio!');
    }

  return (
    <div>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} hasBorder={true} alt="" />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title='04/07 às 08:13h' dateTime={"12/13"}>{publishedDateFormatted}</time>
            </header>

            <div className={styles.content}>
                {post.content.map((item) => {
                    if(item.type === 'paragraph') {
                        return <p key={item.content}>{item.content}</p>
                    } else if(item.type === 'link') {
                        return <p key={item.content}><a href="">{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixa seu feedback</strong>

                <textarea
                    onChange={handleNewCommentChange}
                    name="comment"
                    value={newCommentText}
                    placeholder='Deixe  um comentário'      
                    //"onInvalid altera o valor do erro quando bate no required"
                    onInvalid={handleNewComentInvalid}
                    required
                />

                <footer>
                    {/* o disbled está virificando se tem alguma coisa no campo de texto, se tiver ele libera o botão */}
                    <button type="submit" disabled={newCommentText.length === 0}>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                { comments.map((item) => {
                    return ( 
                        <Comment 
                            key={item} 
                            content={item} 
                            onDeleteComment={deleteComment} 
                        /> 
                    )
                })}
            </div>
        </article>
    </div>
  )
}
