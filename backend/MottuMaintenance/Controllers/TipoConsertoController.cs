using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MottuMaintenance.Data;
using MottuMaintenance.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MottuMaintenance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoConsertoController : ControllerBase
    {
        private readonly MottuContext _context;

        public TipoConsertoController(MottuContext context)
        {
            _context = context;
        }

        // GET: api/TipoConserto
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoConserto>>> GetTipoConsertos()
        {
            return await _context.TipoConsertos.ToListAsync();
        }

        // GET: api/TipoConserto/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoConserto>> GetTipoConserto(int id)
        {
            var tipoConserto = await _context.TipoConsertos.FindAsync(id);

            if (tipoConserto == null)
            {
                return NotFound();
            }

            return tipoConserto;
        }

        // POST: api/TipoConserto
        [HttpPost]
        public async Task<ActionResult<TipoConserto>> PostTipoConserto(TipoConserto tipoConserto)
        {
            _context.TipoConsertos.Add(tipoConserto);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTipoConserto), new { id = tipoConserto.Id }, tipoConserto);
        }

        // PUT: api/TipoConserto/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoConserto(int id, TipoConserto tipoConserto)
        {
            if (id != tipoConserto.Id)
            {
                return BadRequest();
            }

            _context.Entry(tipoConserto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoConsertoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/TipoConserto/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoConserto(int id)
        {
            var tipoConserto = await _context.TipoConsertos.FindAsync(id);
            if (tipoConserto == null)
            {
                return NotFound();
            }

            _context.TipoConsertos.Remove(tipoConserto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoConsertoExists(int id)
        {
            return _context.TipoConsertos.Any(e => e.Id == id);
        }
    }
}