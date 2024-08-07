import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePartyInput {
  @Field()
  name: string;

  @Field()
  ideology: string;

  @Field()
  color: string;

  @Field({ nullable: true })
  leader?: string;

  @Field({ nullable: true })
  founded?: Date;

  @Field({ nullable: true })
  headquarters?: string;

  @Field({ nullable: true })
  website?: string;

  @Field({ nullable: true })
  photoUrl?: string;
}

@InputType()
export class UpdatePartyInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  ideology?: string;

  @Field({ nullable: true })
  color?: string;

  @Field({ nullable: true })
  leader?: string;

  @Field({ nullable: true })
  founded?: Date;

  @Field({ nullable: true })
  headquarters?: string;

  @Field({ nullable: true })
  website?: string;

  @Field({ nullable: true })
  photoUrl?: string;

}
