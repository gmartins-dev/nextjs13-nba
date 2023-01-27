import { getAllTeamIds, getTeamData } from 'app/espn'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import TeamSelect from './select'

function Row({
  awayScore,
  color,
  date,
  homeScore,
  index,
  isLast,
  logo,
  name,
  rank,
  teamId,
  winner,
}: any) {
  return (
    <div
      className={clsx(
        'flex flex-col min-[450px]:flex-row justify-between px-0 min-[450px]:px-4 py-2',
        { 'border-b border-gray-200 dark:border-gray-800': !isLast }
      )}
    >
      <div className='flex'>
        <Image
          src={logo}
          alt={name}
          priority={index < 10}
          width={20}
          height={20}
          className={clsx('h-5 w-5', {
            'dark:invert': color === '000000',
          })}
        />
        <Link href={`/${teamId}`} className='ml-4 font-semibold'>
          {rank !== 99 ? (
            <span className='mr-2 text-sm font-normal text-gray-500 uppercase'>
              {rank}
            </span>
          ) : null}
          {name}
        </Link>
      </div>
      <div className='flex flex-row-reverse justify-end min-[450px]:flex-row'>
        {homeScore ? (
          <p className='text-gray-700 dark:text-gray-300 tabular-nums'>{`${homeScore}-${awayScore}`}</p>
        ) : null}
        {homeScore ? (
          winner ? (
            <p className='font-semibold text-green-700 dark:text-green-500 ml-0 min-[450px]:ml-2 w-5 mr-4 min-[450px]:mr-0 text-center'>
              W
            </p>
          ) : (
            <p className='font-semibold text-red-700 dark:text-red-500 ml-0 min-[450px]:ml-2 w-5 mr-4 min-[450px]:mr-0 text-center'>
              L
            </p>
          )
        ) : homeScore === 0 ? (
          <p className='font-semibold text-gray-500 ml-0 min-[450px]:ml-2 w-5 mr-4 min-[450px]:mr-0 text-center'>
            —
          </p>
        ) : (
          <p className='text-gray-700 dark:text-gray-300'>{date}</p>
        )}
      </div>
    </div>
  )
}

export default async function HomePage({
  params,
}: {
  params: { teamId: string }
}) {
  const [team, allTeams] = await Promise.all([
    getTeamData(params.teamId),
    getAllTeamIds(),
  ])
  const { name, record, color, standing, games, logo } = team

  return (
    <>
      <div className='h-4' style={{ background: `#${color}` }} />
      <section className='max-w-lg px-4 mx-auto my-6'>
        <div className='flex items-center'>
          <Image
            src={logo}
            alt='Logo'
            priority
            width={24}
            height={24}
            className={clsx('h-6 w-6', {
              'dark:invert': color === '000000',
            })}
          />
          <h1 className='ml-2 text-2xl font-semibold'>{name}</h1>
        </div>
        <h3 className='mb-2 text-gray-700 dark:text-gray-300'>{`${record} • ${standing}`}</h3>
        <TeamSelect allTeams={allTeams} teamId={params.teamId} />
        <h2 className='text-xl font-semibold'>Scores & Schedules</h2>
        <div>
          {games.map((game, index) => {
            return (
              <Row
                key={game.name}
                index={index}
                isLast={index === games.length - 1}
                {...game}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}
