import { Module } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';

@Module({
  imports: [],
  controllers: [],
  providers: [{
    provide: 'MONGO_INJECTION',
    useFactory: async (): Promise<Db> => {
      const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@twitchclone.fqond.mongodb.net/?retryWrites=true&w=majority`);

      return client.db('nestjs-blog');
    }
  }],
  exports: ['MONGO_INJECTION']
})
export class MongoModule {}
