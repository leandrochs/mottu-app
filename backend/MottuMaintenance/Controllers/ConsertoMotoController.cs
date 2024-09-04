using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MottuMaintenance.Data;
using MottuMaintenance.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MottuMaintenance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConsertoMotoController : ControllerBase
    {
        private readonly MottuContext _context;

        public ConsertoMotoController(MottuContext context)
        {
            _context = context;
        }

        // GET: api/ConsertoMoto
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ConsertoMoto>>> GetConsertoMotos()
        {
            return await _context.ConsertoMotos.ToListAsync();
        }

        // GET: api/ConsertoMoto/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ConsertoMoto>> GetConsertoMoto(int id)
        {
            var consertoMoto = await _context.ConsertoMotos.FindAsync(id);

            if (consertoMoto == null)
            {
                return NotFound();
            }

            return consertoMoto;
        }

        // POST: api/ConsertoMoto
        [HttpPost]
        public async Task<ActionResult<ConsertoMoto>> PostConsertoMoto(ConsertoMoto consertoMoto)
        {
            _context.ConsertoMotos.Add(consertoMoto);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetConsertoMoto), new { id = consertoMoto.ConsertoMotoId }, consertoMoto);
        }

        // PUT: api/ConsertoMoto/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConsertoMoto(int id, ConsertoMoto consertoMoto)
        {
            if (id != consertoMoto.ConsertoMotoId)
            {
                return BadRequest();
            }

            _context.Entry(consertoMoto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConsertoMotoExists(id))
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

        // DELETE: api/ConsertoMoto/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConsertoMoto(int id)
        {
            var consertoMoto = await _context.ConsertoMotos.FindAsync(id);
            if (consertoMoto == null)
            {
                return NotFound();
            }

            _context.ConsertoMotos.Remove(consertoMoto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ConsertoMotoExists(int id)
        {
            return _context.ConsertoMotos.Any(e => e.ConsertoMotoId == id);
        }

        // GET: api/ConsertoMoto/ExcedidoTempo
        [HttpGet("ExcedidoTempo")]
        public async Task<ActionResult<IEnumerable<ConsertoMoto>>> GetConsertosExcedidoTempo()
        {
            var consertosExcedidos = await _context.ConsertoMotos
                .Include(c => c.TipoConserto)
                .Where(c => c.TempoReal.HasValue && c.TipoConserto != null && c.TempoReal.Value > c.TipoConserto.TempoEstimado)
                .ToListAsync();

            return consertosExcedidos;
        }
    }
}