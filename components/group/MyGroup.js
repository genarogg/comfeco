import React from 'react'
import Link from 'next/link'

const MyGroup = (group) => {
  return (
    <section className='card-widget-2'>
      <div className='card-widget-head '>
        <Link href='/group/team-react-59'>
          <a className='card-flex-inline name_team'>
            <div className='title_name'>
              <h3>Mi grupo</h3>
              <h2>Team React #59 »</h2>
            </div>
            <i>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                aria-label='JavaScript'
                viewBox='0 0 512 512'
              >
                <rect width='512' height='512' fill='#f7df1e' rx='15%' />
                <path d='m324,370c10,17 24,29 47,29 20,0 33,-10 33,-24 0,-16 -13,-22 -35,-32l-12,-5c-35,-15 -58,-33 -58,-72 0,-36 27,-64 70,-64 31,0 53,11 68,39l-37,24c-8,-15 -17,-21 -31,-21 -14,0 -23,9 -23,21 0,14 9,20 30,29l12,5c41,18 64,35 64,76 0,43 -34,67 -80,67 -45,0 -74,-21 -88,-49zm-170,4c8,13 14,25 31,25 16,0 26,-6 26,-30V203h48v164c0,50 -29,72 -72,72 -39,0 -61,-20 -72,-44z' />
              </svg>
            </i>
          </a>
        </Link>
      </div>
      <div className='card-widget-body col-xs-12 card-scroll' data-size='small'>
        {/* <!--cards--> */}
        <div className='card-group'>
          <div className='card-group-body'>
            <img className='card-group-image'
              src='/default-event.jpg'
              alt='default avatar'
            />
            <div className='card-group-title'>
              <div className='card-group-title_name'>Marcelino Abreu</div>
              <div className='card-group-title_nivel'>Avanzado</div>
          </div>
          </div>
          <div className='card-group-rango'>Líder</div>
        </div>
        <div className='card-group'>
          <div className='card-group-body'>
            <img className='card-group-image'
              src='/default-event.jpg'
              alt='default avatar'
            />
            <div className='card-group-title'>
              <div className='card-group-title_name'>Genaro Gonzáles</div>
              <div className='card-group-title_nivel'>Avanzado</div>
          </div>
          </div>
          <div className='card-group-rango'>Integrante</div>
        </div>
        <div className='card-group'>
          <div className='card-group-body'>
            <img className='card-group-image'
              src='/default-event.jpg'
              alt='default avatar'
            />
            <div className='card-group-title'>
              <div className='card-group-title_name'>Moisés Lagos</div>
              <div className='card-group-title_nivel'>Avanzado</div>
          </div>
          </div>
          <div className='card-group-rango'>Integrante</div>
        </div>
        <div className='card-group'>
          <div className='card-group-body'>
            <img className='card-group-image'
              src='/default-event.jpg'
              alt='default avatar'
            />
            <div className='card-group-title'>
              <div className='card-group-title_name'>Jarrison Cano</div>
              <div className='card-group-title_nivel'>Avanzado</div>
          </div>
          </div>
          <div className='card-group-rango'>Integrante</div>
        </div>
        <div className='card-group'>
          <div className='card-group-body'>
            <img className='card-group-image'
              src='/default-event.jpg'
              alt='default avatar'
            />
            <div className='card-group-title'>
              <div className='card-group-title_name'>Glisse Jorge</div>
              <div className='card-group-title_nivel'>Avanzado</div>
          </div>
          </div>
          <div className='card-group-rango'>Integrante</div>
        </div>
       {/* <!-- end cards --> */}
      </div>
      <div className='card-widget-footer'>
        <div className='row middle-xs action-groups'>
          <div className='col-xs-6'>
            <button className='btn btn-outline-default full-width'>
              Abandonar
            </button>
          </div>
          <div className='col-xs-6'>
            <Link href='/chat'>
              <a className='btn btn-outline btn-black full-width'>ir al chat</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default MyGroup
