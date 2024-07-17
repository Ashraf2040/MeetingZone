import prisma from '@/lib/client'
import { auth } from '@clerk/nextjs/server'
import { User } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import UserInfoCardInteraction from './UserInfoCardInteraction'
import UpdateUser from './UpdateUser'

const UserInfoCard =async ({user}:{user:User}) => {
  const createdAtDate = new Date(user.createdAt);

  const formattedDate = createdAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;
  const { userId: currentUserId } = auth();

  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user.id,
      },
    });

    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);
    const followRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });

    followRes ? (isFollowing = true) : (isFollowing = false);
    const followReqRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });

    followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);
  }
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4 '>
    {/* Top */}
    <div className='flex items-center justify-between font-medium'>
      <span className='text-gray-500'>User Information</span>
      {currentUserId === user?.id ? (
        <UpdateUser user={user} />
      ): (
        <Link href={"/"} className='text-blue-500'>See all</Link>
      )}
      
</div>
 {/* Bottom */}
 <div className='flex flex-col gap-4 text-gray-500'>
  <div className="flex items-center gap-2">
    <span className='text-xl text-black'>{(user?.name && user.surname) ? user.name + " " + user.surname : user?.username}</span>
    <span className='text-sm'>{user?.username}</span>
  </div>
  {user?.description && <p>{user?.description}</p>}
  {user?.city&&<div className='flex items-center gap-2'>
    <Image src="/map.png" width={16} height={16} alt="" />
    <span>Living in <b>{user?.city}</b>.</span>
  </div>}
  {user?.school&&<div className='flex items-center gap-2'>
    <Image src="/school.png" width={16} height={16} alt="" />
    <span>Went to <b>{user?.school} </b> </span>
  </div>}
 {user?.work&& <div className='flex items-center gap-2'>
    <Image src="/work.png" width={16} height={16} alt="" />
    <span>Work at <b>={user?.work}</b>.</span>
  </div>}
  <div className="flex justify-between items-center">

   {user?.website&& <div className='flex items-center gap-1'>
      <Image src="/link.png" width={16} height={16} alt="" />
      <Link href="/">{user?.website}</Link>
    </div>}

    {user?.createdAt&&<div className='flex items-center gap-1'>
      <Image src="/date.png" width={16} height={16} alt="" />
      <Link href="/">Joined {formattedDate}</Link>
    </div>}
    
  </div>

 {(currentUserId && currentUserId !== user?.id) &&<UserInfoCardInteraction userId={user?.id as string} 

 isUserBlocked={isUserBlocked}
  isFollowing={isFollowing} 
  isFollowingSent={isFollowingSent}/>}
 </div>
    </div>
  )
}

export default UserInfoCard
